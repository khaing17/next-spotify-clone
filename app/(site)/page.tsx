import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <h1 className="text-3xl font-bold text-white">
          Welcome to Next.js!
        </h1>
      </Header>
    </div>
  )
}
