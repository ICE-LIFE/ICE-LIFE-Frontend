import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NotFound = () => {
	return (
		<Container>
			<h1>Page not found</h1>
		</Container>
	);
}

export default NotFound;