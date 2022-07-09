import styled from 'styled-components'

export const Button = styled.button`
    // truyền css nếu props có tồn tại 
    background: ${props => props.bgPrimary ? 'aqua' : 'orange'};
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: ${props => props.fontsize2x ? '2rem' : '1rem'};
    padding: 1rem;
    opacity: 1;
        &:hover {
            opacity: 0.7;
            transition: all 0.5s;
        }
        // css cho class
        &.button_style {
            font-weight: bold;
        }
`
// tính kế thừa
export const SmallButton = styled(Button)`
    background-color: red;
    font-size: 0.5rem;
`