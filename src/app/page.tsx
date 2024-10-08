import DefaultLayout from "@/layout/default";
import { Button } from "@mui/joy";
import ComicItem from "@/components/comic/item";
import Sidebar from "@/components/sidebar";
import { FAKEDATA } from "./data";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex just gap-4 pt-[10%] content mx-auto">
        <div className="bg-grey-900 pl-8 pr-4">
          <div className="w-full flex justify-between py-6">
            <h2 className="text-2xl font-bold text-white">
              Atualizações Diárias
            </h2>
            <Button className="bg-orange-600 hover:bg-orange-800 transition-colors font-semibold">
              Ver Mais
            </Button>
          </div>
          <div className="grid grid-cols-5 flex-gap flex-wrap gap-x-2 gap-y-5">
            {FAKEDATA.map((comic, i) => (
              <ComicItem
                key={comic.title}
                comic={comic}
                flag={i % 3 === 0 ? "novo" : undefined}
              />
            ))}
            {FAKEDATA.map((comic, i) => (
              <ComicItem
                key={comic.title}
                comic={comic}
                flag={i % 3 === 0 ? "popular" : undefined}
              />
            ))}
          </div>

          <div className="w-full flex justify-between py-6">
            <h2 className="text-2xl font-bold text-white">Videos Novos</h2>
            <Button className="bg-orange-600 hover:bg-orange-800 active:bg-orange-800 transition-colors font-semibold">
              Ver Mais
            </Button>
          </div>

          <div className="grid grid-cols-5 flex-gap flex-wrap gap-x-2 gap-y-5">
            {FAKEDATA.map((comic, i) => (
              <ComicItem
                key={comic.title}
                comic={comic}
                flag={i % 3 === 0 ? "atualizou" : undefined}
              />
            ))}
            {FAKEDATA.map((comic, i) => (
              <ComicItem
                key={comic.title}
                comic={comic}
                flag={i % 3 === 0 ? "top" : undefined}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 min-w-80 rounded-md">
          <Sidebar />
        </div>
      </div>
    </DefaultLayout>
  );
}
