import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-8 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Zotletics
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Personalized fitness plans for UCI students. Mesa Court and Middle
          Earth gym equipment — no extra memberships, no ads.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Phase 1 complete. Auth & onboarding next →
        </p>
        <Button size="lg" disabled>
          Coming soon
        </Button>
      </main>
    </div>
  );
}

function Welcome() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Welcome to Zotletics
            </h1>
        </div>
    )
}

function ComingSoon() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Coming Soon
            </h1>
        </div>
    )
}


