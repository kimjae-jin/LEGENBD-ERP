import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>
      <h1 className="text-4xl font-bold">
        LEGENBD-ERP
      </h1>
      <p className="mt-4 text-muted-foreground">
        The Foundation is Ready.
      </p>
    </main>
  );
}
