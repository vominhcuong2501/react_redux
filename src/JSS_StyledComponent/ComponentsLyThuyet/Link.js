import styled from "styled-components";

// cách 1
export const Link = ({ className, children, ...restProps }) => {
  return <a className={className}>{children}</a>;
};

// Cách 2
// export const Link = (props) => (
//     return <a className={props.className}>{props.children}</a>
//   );


// chỉ định nghĩa phần css cơ bản chứ không kế thừa nội dung
export const StyledLink = styled(Link)`
    color: white !important;
    font-weight: bold;
    background-color: orange;
`