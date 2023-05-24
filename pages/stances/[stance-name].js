import { stancesData } from "@/utils/data";
export default function Stance(props) {
    return (
        <>
            <p>So you are looking for <em>{props["stance-name"]}</em></p>
        </>
    );
};

export async function getStaticPaths() {
    const paths = stancesData.map((stance) => ({
        params: { "stance-name": stance.id },
      })); 
    return {paths, fallback: false}
}

export async function getStaticProps(context) {
    return {props: {"stance-name": context.params["stance-name"]}}
}