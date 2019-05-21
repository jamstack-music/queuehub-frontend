/* global window document */
import { useState, useEffect } from 'react';
import { spotify } from '../data/spotify';
import extractAlbum from '../data/extractors/album';

const reload = (setLoading) => {
  if (
    (window.innerHeight + window.scrollY)
    >= (document.body.offsetHeight - 2000)
  ) {
    setLoading(true);
  }
};

export default function useInfiniteRetrieval(initial) {
  const [next, setNext] = useState(initial);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const handleScroll = () => reload(setLoading);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);

    return function unListen() {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  useEffect(() => {
    if (loading && next) {
      spotify.getGeneric(next).then((res) => {
        const { items, next: nextLink } = res;
        const newList = items.map((item) => {
          if (item.album) return extractAlbum(item.album);
          return item;
        });

        setList([...list, ...newList]);
        setLoading(false);
        setNext(nextLink);
      }).catch(err => err);
    }
  }, [list, loading, next]);

  return [list, loading];
}
