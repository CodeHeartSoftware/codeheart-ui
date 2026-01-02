import {styled} from "styled-components";
import Hero from "~/components/Hero";

const Page = styled.div`
background-color: var(--theme-color-pink)`;

export function Home() {
    return <main>
        <Hero />
    </main>
};

