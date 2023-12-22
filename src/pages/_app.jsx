/* _app.js 가 청사진임! 얘를 먼저 보고 페이지 그려줌 */
import Layout from "../components/Layout"; // App 컴포넌트에서만 css 임포트 할 수 있음!! 다른 컴포넌트는 모듈로 받아야함!!!

export default function App({Component, pageProps}) {
    return <>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
}