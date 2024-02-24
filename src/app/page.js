'use client'
import Image from "next/image";
import BB8 from '../../public/bb8.png';
import CharacterList from "../components/CharacterList/CharacterList";
import { useCharacterStore } from "../store/useCharacterStore";
import { Suspense } from "react";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  const {characters} = useCharacterStore()

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <section className="flex flex-col items-center min-w-full ">
        {characters.length !== 0 ? 
          <>
            <CharacterList/>
          </>
          :
          <>
            <Image src={BB8}  className="m-0 p-0" alt="placeholder" width={"auto"} height={500} priority={false} />
            <span className="text-slate-200 font-[800] text-7xl text-center">Find your next greate adventure</span> 
          </>
        }
      </section>
    </main>
  );
}
