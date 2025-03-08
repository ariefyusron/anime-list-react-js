import { useEffect, useRef } from "react";

interface InfiniteScrollProps {
  loadMore: () => void;
}

const InfiniteScroll = ({ loadMore }: InfiniteScrollProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div ref={observerRef} style={{ height: 20, background: "transparent" }} />
  );
};

export default InfiniteScroll;
