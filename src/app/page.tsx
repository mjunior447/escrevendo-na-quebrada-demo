"use client";
import ComoFunciona from "@/components/home/como_funciona/ComoFunciona";
import Contato from "@/components/home/contato/Contato";
import Faq from "@/components/home/faq/Faq";
import Resultados from "@/components/home/resultados/Resultados";
import SejaAluno from "@/components/home/seja_aluno/SejaAluno";
import SejaVoluntario from "@/components/home/seja_voluntario/SejaVoluntario";
import Sobre from "@/components/home/sobre/Sobre";
import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const targetSection = document.getElementById("sobre");

    if (!targetSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",

        threshold: 0.1,
        
      }
    );
    observer.observe(targetSection);
    return () => {
      observer.unobserve(targetSection);
    };
  }, []);

  return (
    <main className="relative scroll-smooth flex flex-col gap-4 items-center overflow-x-hidden">
      {showScrollTop && (
        <Link href={"#navbar"}>
          <div className="fixed right-10 bottom-10 cursor-pointer bg-white rounded-full z-50">
            <FaArrowCircleUp color="#8c2985" size={35} />
          </div>
        </Link>
      )}
      <div className="flex flex-col items-center w-full h-full max-w-[1440px] text-preto1">
        <section id="sobre">
          <Sobre />
        </section>
        <section id="como_funciona">
          <ComoFunciona />
        </section>
        <section id="seja_aluno">
          <SejaAluno />
        </section>
        <section id="seja_voluntario">
          <SejaVoluntario />
        </section>
        <section id="nossos_resultados">
          <Resultados />
        </section>
        <section id="contato">
          <Contato />
        </section>
        <section id="faq">
          <Faq />
        </section>
      </div>
    </main>
  );
}
