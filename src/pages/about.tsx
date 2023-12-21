import Seo from "@/components/Seo";
import Detail from "@/pages/movies/[...params]";

export default function About () {
    return (
            <div>
                <Seo title="About"/>
                <h1>This is About</h1>
                <Detail id={12345} />
            </div>
    )
}