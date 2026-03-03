import { useState, useEffect } from 'react';

export function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) {
  const [typed, setTyped] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = deleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (!deleting && typed === currentWord) {
        setTimeout(() => setDeleting(true), pauseTime);
        return;
      }
      if (deleting && typed === '') {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
        return;
      }
      setTyped(prev =>
        deleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [typed, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return typed;
}
