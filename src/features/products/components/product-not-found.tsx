'use client';

import { useRouter } from 'next/navigation';

import { ArrowLeft, Home, PackageX } from 'lucide-react';

import FloatingParticles from '@/components/visuals/floating-particles';

interface Props {
  prefix: string;
}

const ProductNotFound = ({ prefix }: Props) => {
  const router = useRouter();

  return (
    <div className="from-background via-surface to-secondary relative min-h-[90vh] overflow-hidden rounded-2xl bg-linear-to-br p-10">
      <FloatingParticles />

      {/* EXACT 35% TOP ALIGNMENT */}
      <div className="absolute top-[35%] left-1/2 z-10 flex w-full max-w-2xl -translate-x-1/2 -translate-y-1/3 flex-col items-center px-4 text-center">
        <div className="relative mb-6">
          <PackageX className="text-primary/40 h-24 w-24 animate-pulse" />

          <div
            className="bg-gradient-primary absolute inset-0 -z-10 opacity-30 blur-3xl"
            style={{ transform: 'scale(0.6)' }}
          />
        </div>

        <h2 className="text-gradient-primary glow mb-4 text-4xl font-black md:text-5xl">
          Product Not Found
        </h2>

        <p className="text-muted-foreground mb-8 text-lg">
          The product you&apos;re trying to view doesn&apos;t exist anymore or its link is invalid.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => router.push(`/${prefix}/products`)}
            className="group bg-gradient-primary hover-scale glow cursor-pointer rounded-xl px-8 py-3 font-semibold transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <Home className="h-5 w-5" />
              Back to Products
            </span>
          </button>

          <button
            onClick={() => router.back()}
            className="group border-secondary bg-primary/5 hover-scale cursor-pointer rounded-xl border-2 px-8 py-3 font-semibold backdrop-blur-sm transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Go Back
            </span>
          </button>
        </div>

        <div className="bg-gradient-mesh absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl" />
      </div>
    </div>
  );
};

export default ProductNotFound;
