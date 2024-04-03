import { useEffect, useState } from 'react';

function serializeImplicit<T>(value: T): string {
  return JSON.stringify(value);
}

function deserializeImplicit<T>(value: string): T {
  return JSON.parse(value) as unknown as T;
}

export default function useUrlState<T>(
  key: string,
  initialValue: T,
  serialize: (value: T) => string = serializeImplicit,
  deserialize: (value: string) => T = deserializeImplicit,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const url = new URL(window.location.href);
    const savedValue = url.searchParams.get(key);
    return savedValue != null ? deserialize(savedValue) : initialValue;
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    if (value === initialValue) {
      url.searchParams.delete(key);
    } else {
      const savedValue = serialize(value);
      url.searchParams.set(key, savedValue);
    }
    window.history.replaceState({}, '', url.toString());
  }, [key, value, serialize]);

  return [value, setValue];
}
