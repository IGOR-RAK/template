import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import Intro from "../components/Intro";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import bg from "../public/lawyer.jpg";

const Home = () => {
  return (
    <>
      <Head>
        <title>Kancelaria Radcy Pravnego</title>
        <meta name="description" content="Kancelaria Radcy Pravnego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing/>
      <Intro/>

    

      {/* <div className="flex flex-col justify-center items-center w-4/5 margin-700">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div>
          Post no so what deal evil rent by real in. But her ready least set
          lived spite solid. September how men saw tolerably two behaviour
          arranging. She offices for highest and replied one venture pasture.
          Applauded no discovery in newspaper allowance am northward. Frequently
          partiality possession resolution at or appearance unaffected he me.
          Engaged its was evident pleased husband. Ye goodness felicity do
          disposal dwelling no. First am plate jokes to began of cause an scale.
          Subjects he prospect elegance followed no overcame possible it on.
          Blind would equal while oh mr do style. Lain led and fact none. One
          preferred sportsmen resolving the happiness continued. High at of in
          loud rich true. Oh conveying do immediate acuteness in he. Equally
          welcome her set nothing has gravity whether parties. Fertile suppose
          shyness mr up pointed in staying on respect. Behind sooner dining so
          window excuse he summer. Breakfast met certainty and fulfilled
          propriety led. Waited get either are wooded little her. Contrasted
          unreserved as mr particular collecting it everything as indulgence.
          Seems ask meant merry could put. Age old begin had boy noisy table
          front whole given. Ye to misery wisdom plenty polite to as. Prepared
          interest proposal it he exercise. My wishing an in attempt ferrars.
          Visited eat you why service looking engaged. At place no walls hopes
          rooms fully in. Roof hope shy tore leaf joy paid boy. Noisier out
          brought entered detract because sitting sir. Fat put occasion rendered
          off humanity has. He went such dare good mr fact. The small own seven
          saved man age no offer. Suspicion did mrs nor furniture smallness.
          Scale whole downs often leave not eat. An expression reasonably
          cultivated indulgence mr he surrounded instrument. Gentleman eat and
          consisted are pronounce distrusts. Advantage old had otherwise
          sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw you him full not mean evil. Prepare garrets it
          expense windows shewing do an. She projection advantages resolution
          son indulgence. Part sure on no long life am at ever. In songs above
          he as drawn to. Gay was outlived peculiar rendered led six. Imagine
          was you removal raising gravity. Unsatiable understood or expression
          dissimilar so sufficient. Its party every heard and event gay. Advice
          he indeed things adieus in number so uneasy. To many four fact in he
          fail. My hung it quit next do of. It fifteen charmed by private
          savings it mr. Favourable cultivated alteration entreaties yet met
          sympathize. Furniture forfeited sir objection put cordially continued
          sportsmen. Death weeks early had their and folly timed put. Hearted
          forbade on an village ye in fifteen. Age attended betrayed her man
          raptures laughter. Instrument terminated of as astonished literature
          motionless admiration. The affection are determine how performed
          intention discourse but. On merits on so valley indeed assure of. Has
          add particular boisterous uncommonly are. Early wrong as so manor
          match. Him necessary shameless discovery consulted one but. Shewing
          met parties gravity husband sex pleased. On to no kind do next feel
          held walk. Last own loud and knew give gay four. Sentiments motionless
          or principles preference excellence am. Literature surrounded
          insensible at indulgence or to admiration remarkably. Matter future
          lovers desire marked boy use. Chamber reached do he nothing be. He do
          subjects prepared bachelor juvenile ye oh. He feelings removing
          informed he as ignorant we prepared. Evening do forming observe
          spirits is in. Country hearted be of justice sending. On so they as
          with room cold ye. Be call four my went mean. Celebrated if remarkably
          especially an. Going eat set she books found met aware.
        </div>
        <div>
          Post no so what deal evil rent by real in. But her ready least set
          lived spite solid. September how men saw tolerably two behaviour
          arranging. She offices for highest and replied one venture pasture.
          Applauded no discovery in newspaper allowance am northward. Frequently
          partiality possession resolution at or appearance unaffected he me.
          Engaged its was evident pleased husband. Ye goodness felicity do
          disposal dwelling no. First am plate jokes to began of cause an scale.
          Subjects he prospect elegance followed no overcame possible it on.
          Blind would equal while oh mr do style. Lain led and fact none. One
          preferred sportsmen resolving the happiness continued. High at of in
          loud rich true. Oh conveying do immediate acuteness in he. Equally
          welcome her set nothing has gravity whether parties. Fertile suppose
          shyness mr up pointed in staying on respect. Behind sooner dining so
          window excuse he summer. Breakfast met certainty and fulfilled
          propriety led. Waited get either are wooded little her. Contrasted
          unreserved as mr particular collecting it everything as indulgence.
          Seems ask meant merry could put. Age old begin had boy noisy table
          front whole given. Ye to misery wisdom plenty polite to as. Prepared
          interest proposal it he exercise. My wishing an in attempt ferrars.
          Visited eat you why service looking engaged. At place no walls hopes
          rooms fully in. Roof hope shy tore leaf joy paid boy. Noisier out
          brought entered detract because sitting sir. Fat put occasion rendered
          off humanity has. He went such dare good mr fact. The small own seven
          saved man age no offer. Suspicion did mrs nor furniture smallness.
          Scale whole downs often leave not eat. An expression reasonably
          cultivated indulgence mr he surrounded instrument. Gentleman eat and
          consisted are pronounce distrusts. Advantage old had otherwise
          sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw you him full not mean evil. Prepare garrets it
          expense windows shewing do an. She projection advantages resolution
          son indulgence. Part sure on no long life am at ever. In songs above
          he as drawn to. Gay was outlived peculiar rendered led six. Imagine
          was you removal raising gravity. Unsatiable understood or expression
          dissimilar so sufficient. Its party every heard and event gay. Advice
          he indeed things adieus in number so uneasy. To many four fact in he
          fail. My hung it quit next do of. It fifteen charmed by private
          savings it mr. Favourable cultivated alteration entreaties yet met
          sympathize. Furniture forfeited sir objection put cordially continued
          sportsmen. Death weeks early had their and folly timed put. Hearted
          forbade on an village ye in fifteen. Age attended betrayed her man
          raptures laughter. Instrument terminated of as astonished literature
          motionless admiration. The affection are determine how performed
          intention discourse but. On merits on so valley indeed assure of. Has
          add particular boisterous uncommonly are. Early wrong as so manor
          match. Him necessary shameless discovery consulted one but. Shewing
          met parties gravity husband sex pleased. On to no kind do next feel
          held walk. Last own loud and knew give gay four. Sentiments motionless
          or principles preference excellence am. Literature surrounded
          insensible at indulgence or to admiration remarkably. Matter future
          lovers desire marked boy use. Chamber reached do he nothing be. He do
          subjects prepared bachelor juvenile ye oh. He feelings removing
          informed he as ignorant we prepared. Evening do forming observe
          spirits is in. Country hearted be of justice sending. On so they as
          with room cold ye. Be call four my went mean. Celebrated if remarkably
          especially an. Going eat set she books found met aware.
        </div>
        <div>
          Post no so what deal evil rent by real in. But her ready least set
          lived spite solid. September how men saw tolerably two behaviour
          arranging. She offices for highest and replied one venture pasture.
          Applauded no discovery in newspaper allowance am northward. Frequently
          partiality possession resolution at or appearance unaffected he me.
          Engaged its was evident pleased husband. Ye goodness felicity do
          disposal dwelling no. First am plate jokes to began of cause an scale.
          Subjects he prospect elegance followed no overcame possible it on.
          Blind would equal while oh mr do style. Lain led and fact none. One
          preferred sportsmen resolving the happiness continued. High at of in
          loud rich true. Oh conveying do immediate acuteness in he. Equally
          welcome her set nothing has gravity whether parties. Fertile suppose
          shyness mr up pointed in staying on respect. Behind sooner dining so
          window excuse he summer. Breakfast met certainty and fulfilled
          propriety led. Waited get either are wooded little her. Contrasted
          unreserved as mr particular collecting it everything as indulgence.
          Seems ask meant merry could put. Age old begin had boy noisy table
          front whole given. Ye to misery wisdom plenty polite to as. Prepared
          interest proposal it he exercise. My wishing an in attempt ferrars.
          Visited eat you why service looking engaged. At place no walls hopes
          rooms fully in. Roof hope shy tore leaf joy paid boy. Noisier out
          brought entered detract because sitting sir. Fat put occasion rendered
          off humanity has. He went such dare good mr fact. The small own seven
          saved man age no offer. Suspicion did mrs nor furniture smallness.
          Scale whole downs often leave not eat. An expression reasonably
          cultivated indulgence mr he surrounded instrument. Gentleman eat and
          consisted are pronounce distrusts. Advantage old had otherwise
          sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw you him full not mean evil. Prepare garrets it
          expense windows shewing do an. She projection advantages resolution
          son indulgence. Part sure on no long life am at ever. In songs above
          he as drawn to. Gay was outlived peculiar rendered led six. Imagine
          was you removal raising gravity. Unsatiable understood or expression
          dissimilar so sufficient. Its party every heard and event gay. Advice
          he indeed things adieus in number so uneasy. To many four fact in he
          fail. My hung it quit next do of. It fifteen charmed by private
          savings it mr. Favourable cultivated alteration entreaties yet met
          sympathize. Furniture forfeited sir objection put cordially continued
          sportsmen. Death weeks early had their and folly timed put. Hearted
          forbade on an village ye in fifteen. Age attended betrayed her man
          raptures laughter. Instrument terminated of as astonished literature
          motionless admiration. The affection are determine how performed
          intention discourse but. On merits on so valley indeed assure of. Has
          add particular boisterous uncommonly are. Early wrong as so manor
          match. Him necessary shameless discovery consulted one but. Shewing
          met parties gravity husband sex pleased. On to no kind do next feel
          held walk. Last own loud and knew give gay four. Sentiments motionless
          or principles preference excellence am. Literature surrounded
          insensible at indulgence or to admiration remarkably. Matter future
          lovers desire marked boy use. Chamber reached do he nothing be. He do
          subjects prepared bachelor juvenile ye oh. He feelings removing
          informed he as ignorant we prepared. Evening do forming observe
          spirits is in. Country hearted be of justice sending. On so they as
          with room cold ye. Be call four my went mean. Celebrated if remarkably
          especially an. Going eat set she books found met aware.
        </div>
        <div>
          Post no so what deal evil rent by real in. But her ready least set
          lived spite solid. September how men saw tolerably two behaviour
          arranging. She offices for highest and replied one venture pasture.
          Applauded no discovery in newspaper allowance am northward. Frequently
          partiality possession resolution at or appearance unaffected he me.
          Engaged its was evident pleased husband. Ye goodness felicity do
          disposal dwelling no. First am plate jokes to began of cause an scale.
          Subjects he prospect elegance followed no overcame possible it on.
          Blind would equal while oh mr do style. Lain led and fact none. One
          preferred sportsmen resolving the happiness continued. High at of in
          loud rich true. Oh conveying do immediate acuteness in he. Equally
          welcome her set nothing has gravity whether parties. Fertile suppose
          shyness mr up pointed in staying on respect. Behind sooner dining so
          window excuse he summer. Breakfast met certainty and fulfilled
          propriety led. Waited get either are wooded little her. Contrasted
          unreserved as mr particular collecting it everything as indulgence.
          Seems ask meant merry could put. Age old begin had boy noisy table
          front whole given. Ye to misery wisdom plenty polite to as. Prepared
          interest proposal it he exercise. My wishing an in attempt ferrars.
          Visited eat you why service looking engaged. At place no walls hopes
          rooms fully in. Roof hope shy tore leaf joy paid boy. Noisier out
          brought entered detract because sitting sir. Fat put occasion rendered
          off humanity has. He went such dare good mr fact. The small own seven
          saved man age no offer. Suspicion did mrs nor furniture smallness.
          Scale whole downs often leave not eat. An expression reasonably
          cultivated indulgence mr he surrounded instrument. Gentleman eat and
          consisted are pronounce distrusts. Advantage old had otherwise
          sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw you him full not mean evil. Prepare garrets it
          expense windows shewing do an. She projection advantages resolution
          son indulgence. Part sure on no long life am at ever. In songs above
          he as drawn to. Gay was outlived peculiar rendered led six. Imagine
          was you removal raising gravity. Unsatiable understood or expression
          dissimilar so sufficient. Its party every heard and event gay. Advice
          he indeed things adieus in number so uneasy. To many four fact in he
          fail. My hung it quit next do of. It fifteen charmed by private
          savings it mr. Favourable cultivated alteration entreaties yet met
          sympathize. Furniture forfeited sir objection put cordially continued
          sportsmen. Death weeks early had their and folly timed put. Hearted
          forbade on an village ye in fifteen. Age attended betrayed her man
          raptures laughter. Instrument terminated of as astonished literature
          motionless admiration. The affection are determine how performed
          intention discourse but. On merits on so valley indeed assure of. Has
          add particular boisterous uncommonly are. Early wrong as so manor
          match. Him necessary shameless discovery consulted one but. Shewing
          met parties gravity husband sex pleased. On to no kind do next feel
          held walk. Last own loud and knew give gay four. Sentiments motionless
          or principles preference excellence am. Literature surrounded
          insensible at indulgence or to admiration remarkably. Matter future
          lovers desire marked boy use. Chamber reached do he nothing be. He do
          subjects prepared bachelor juvenile ye oh. He feelings removing
          informed he as ignorant we prepared. Evening do forming observe
          spirits is in. Country hearted be of justice sending. On so they as
          with room cold ye. Be call four my went mean. Celebrated if remarkably
          especially an. Going eat set she books found met aware.
        </div>
        <div>
          Post no so what deal evil rent by real in. But her ready least set
          lived spite solid. September how men saw tolerably two behaviour
          arranging. She offices for highest and replied one venture pasture.
          Applauded no discovery in newspaper allowance am northward. Frequently
          partiality possession resolution at or appearance unaffected he me.
          Engaged its was evident pleased husband. Ye goodness felicity do
          disposal dwelling no. First am plate jokes to began of cause an scale.
          Subjects he prospect elegance followed no overcame possible it on.
          Blind would equal while oh mr do style. Lain led and fact none. One
          preferred sportsmen resolving the happiness continued. High at of in
          loud rich true. Oh conveying do immediate acuteness in he. Equally
          welcome her set nothing has gravity whether parties. Fertile suppose
          shyness mr up pointed in staying on respect. Behind sooner dining so
          window excuse he summer. Breakfast met certainty and fulfilled
          propriety led. Waited get either are wooded little her. Contrasted
          unreserved as mr particular collecting it everything as indulgence.
          Seems ask meant merry could put. Age old begin had boy noisy table
          front whole given. Ye to misery wisdom plenty polite to as. Prepared
          interest proposal it he exercise. My wishing an in attempt ferrars.
          Visited eat you why service looking engaged. At place no walls hopes
          rooms fully in. Roof hope shy tore leaf joy paid boy. Noisier out
          brought entered detract because sitting sir. Fat put occasion rendered
          off humanity has. He went such dare good mr fact. The small own seven
          saved man age no offer. Suspicion did mrs nor furniture smallness.
          Scale whole downs often leave not eat. An expression reasonably
          cultivated indulgence mr he surrounded instrument. Gentleman eat and
          consisted are pronounce distrusts. Advantage old had otherwise
          sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw you him full not mean evil. Prepare garrets it
          expense windows shewing do an. She projection advantages resolution
          son indulgence. Part sure on no long life am at ever. In songs above
          he as drawn to. Gay was outlived peculiar rendered led six. Imagine
          was you removal raising gravity. Unsatiable understood or expression
          dissimilar so sufficient. Its party every heard and event gay. Advice
          he indeed things adieus in number so uneasy. To many four fact in he
          fail. My hung it quit next do of. It fifteen charmed by private
          savings it mr. Favourable cultivated alteration entreaties yet met
          sympathize. Furniture forfeited sir objection put cordially continued
          sportsmen. Death weeks early had their and folly timed put. Hearted
          forbade on an village ye in fifteen. Age attended betrayed her man
          raptures laughter. Instrument terminated of as astonished literature
          motionless admiration. The affection are determine how performed
          intention discourse but. On merits on so valley indeed assure of. Has
          add particular boisterous uncommonly are. Early wrong as so manor
          match. Him necessary shameless discovery consulted one but. Shewing
          met parties gravity husband sex pleased. On to no kind do next feel
          held walk. Last own loud and knew give gay four. Sentiments motionless
          or principles preference excellence am. Literature surrounded
          insensible at indulgence or to admiration remarkably. Matter future
          lovers desire marked boy use. Chamber reached do he nothing be. He do
          subjects prepared bachelor juvenile ye oh. He feelings removing
          informed he as ignorant we prepared. Evening do forming observe
          spirits is in. Country hearted be of justice sending. On so they as
          with room cold ye. Be call four my went mean. Celebrated if remarkably
          especially an. Going eat set she books found met aware.
        </div>
      </div> */}
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
