'use client'

import { useState } from "react";
import Switch from "./Switch";
import SwitchOption from "./SwitchOption";
import Card from "../Card";
import Button from "@/components/Button";
import { MdOutlineCalendarMonth, MdPeopleOutline } from "react-icons/md";
import Link from "next/link";

const NOTICES = [
  {
    state: 'open',
    refMonth: 'Fevereiro 2026',
    title: 'Cursinho Popular de Redação Enem',
    description: 'O curso de redação do EQ tem como objetivo desenvolver, de forma progressiva e aprofundada, as competências exigidas na redação do ENEM, compreendendo a escrita como prática discursiva, argumentativa e socialmente situada.',
    deadline: '02 Fev 2026 - 15 Mar 2026',
    vacancies: 'vagas limitadas',
    link: 'https://forms.gle/rJsopXFTmf1oUBsa7',
  },
  {
    state: 'closed',
    refMonth: 'Fevereiro 2025',
    title: 'Cursinho Popular de Redação Enem',
    description: 'O curso de redação do EQ tem como objetivo desenvolver, de forma progressiva e aprofundada, as competências exigidas na redação do ENEM, compreendendo a escrita como prática discursiva, argumentativa e socialmente situada.',
    deadline: '02 Fev 2025 - 15 Mar 2025',
    vacancies: '0 vagas',
    link: '',
  },
];

const NoticesSwitch = () => {
  const [showOpenNotices, setShowOpenNotices] = useState(true);

  const handleShowOpenNotices = () => {
    setShowOpenNotices(true);
  }

  const handleShowPreviousNotices = () => {
    setShowOpenNotices(false);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-14 lg:mb-28">
        <Switch>
          <SwitchOption
            isActive={showOpenNotices}
            onClick={handleShowOpenNotices}
          >
            <p>Editais em aberto</p>
          </SwitchOption>
          <SwitchOption
            isActive={!showOpenNotices}
            onClick={handleShowPreviousNotices}
          >
            <p>Editais anteriores</p>
          </SwitchOption>
        </Switch>
      </div>

      <div className="flex justify-start items-center gap-8 lg:gap-16 flex-wrap">
        {NOTICES.filter(notice => showOpenNotices ? notice.state === 'open' : notice.state === 'closed').map((notice, index) => (
          <Card key={index}>
            <div className="flex gap-4 items-center mb-6">
              <p className={`p-1 px-4 ${notice.state === 'open' ? 'bg-ciano' : 'bg-laranja'} rounded-xl text-white transition-colors duration-200`}>
                {notice.state === 'open'
                  ? 'Inscrições abertas'
                  : 'Inscrições encerradas'
                }
              </p>
              <p className="border-1 border-cinza p-1 px-2 rounded-xl">{notice.refMonth}</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg lg:text-2xl leading-tight font-bold mb-4">{notice.title}</h3>
              <p className="leading-tight">{notice.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mb-4 text-[#949494] font-bold">
              <p className="text-sm lg:text-lg"><MdOutlineCalendarMonth className="text-lg lg:text-2xl inline" /> {notice.deadline}</p>
              <p className="text-sm lg:text-lg"><MdPeopleOutline className="text-lg lg:text-2xl inline" /> {notice.vacancies}</p>
            </div>
            <div className="max-w-max">
              <Link href={notice.link} target="_blank">
                <Button disabled={notice.state === 'closed'} colorVariant="ciano" className={`rounded-lg h-10 ${notice.state === 'closed' && 'bg-cinza hover:bg-cinza cursor-copy shadow-none text-white1'}`}>
                  {notice.state === 'open' ? 'Inscreva-se agora' : 'Encerrado'}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NoticesSwitch;
