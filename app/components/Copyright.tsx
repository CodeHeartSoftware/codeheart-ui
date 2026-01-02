import Text from "./Text";

const Copyright = () => {
    const thisYear = new Date().getFullYear();

    return <Text>© ${thisYear} Blue World</Text>;
}

export default Copyright;