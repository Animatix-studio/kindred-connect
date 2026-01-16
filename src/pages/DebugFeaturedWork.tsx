import { FeaturedWork } from "@/components/home/FeaturedWork";

const DebugFeaturedWork = () => {
  return (
    <main className="min-h-screen bg-background">
      <FeaturedWork debugOverlay />
    </main>
  );
};

export default DebugFeaturedWork;
