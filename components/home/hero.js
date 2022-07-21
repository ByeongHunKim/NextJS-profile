import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font" style={{ height: '755px' }}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Animation />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요 블록체인 개발자 Eden 입니다
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              좋아하는 체인은 이더리움,폴리곤 그리고 솔라나 입니다. 블록체인 노드 운영 및 web3 에
              관심이 있으며, 현재는 solana.py를 사용하여 지갑연동 및 프로젝트의 솔라나 로직을
              담당하고 있습니다.
            </p>
            <div className="flex justify-center">
              <Link href="/projects">
                <a className="btn-blog">블로그 보러가기</a>
              </Link>
            </div>
            <br />
            <div className="flex justify-center">
              <a className="btn-blog" href="https://velog.io/@hunsm4n">
                Velog 보러가기
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
