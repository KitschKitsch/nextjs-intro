import Head from "next/head"; // HeadTitle을 바꿔주는 패키지

export default function Seo ({title}) {
    return <Head>
        <title>{title} | Next Movies</title>
    </Head>
}
