import Seo from "../components/Seo";
import {
    JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal,
    useEffect,
    useState
} from "react";
import {useRouter} from "next/router";

// const API_KEY = "a43d959187ba7b936ba742af807f3c2f"

export default function Home({results}) {
   /* const [movies, setMovies] = useState(); // undefined는 falsy에 의해 false로 간주됨
    useEffect(() => {
        (async () => { // async : 비동기 선언
            const {results} = await (  // await : 비동기 작업 완료를 기다림
                    await fetch(
                            `/api/movies`)
            ).json();
            console.log(results);
            setMovies(results);
        })(); // () : 즉시실행함수(함수선언 뒤에 붙이면 바로 실행됨. 비동기 함수는 실행해줘야지!)
    }, [])*/

    const router = useRouter();
    // const onClick = (id, title) => {
    //     router.push(
    //             {
    //                 pathname: `/movies/${id}`,
    //                 query: {
    //                     title,
    //                 },
    //             },
    //             `/movies/${id}`
    //     );
    // }

    return (
            <div>
                <Seo title="Home"/>
                {/*{!movies && <h4>Loading...</h4>}*/}
                {/*movies? : 존재하면 */}
                {results?.map((movie) => (
                        <div className="movie" key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <h4>{movie.original_title}</h4>
                        </div>
                ))}

                <style jsx>{`
                  .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                  }
                  
                  .movie {
                    cursor: pointer;
                  }

                  .movie img {
                    max-width: 20%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                  }

                  .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                  }

                  .movie h4 {
                    font-size: 18px;
                    text-align: center;
                  }
                `}</style>
            </div>
    );
}

export async function getServerSideProps() { // server에서만 작동하게! (사용자에게 api같은 특정정보 숨길 수도)
    const {results} = await (await fetch('http://localhost:3000/api/movies')).json();
    return{
        props: {
            results,
        }
    }
}