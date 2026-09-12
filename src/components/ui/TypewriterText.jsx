import { useEffect, useState } from 'react';

/**
 * Reveals text character-by-character. Respects prefers-reduced-motion by
 * rendering the full string immediately.
 */
export default function TypewriterText({ text, speed = 22, as: Tag = 'span', className }) {
  const [shown, setShown] = useState('');

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setShown(text);
      return;
    }

    setShown('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return <Tag className={className}>{shown}</Tag>;
}
