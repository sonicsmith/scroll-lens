import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BlockAnimation } from "./components/BlockAnimation";
import { BlockData } from "./components/BlockData";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center w-full">
        <div className="mt-10">
          <div className="flex gap-5 justify-center">
            <img
              src={"/scroll-icon.avif"}
              width={64}
              height={64}
              alt={"scroll icon"}
            />
            <div className="text-6xl text-white">Scroll Lens</div>
          </div>
          <div className="text-center p-3">
            <BlockData />
          </div>
          <BlockAnimation />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
