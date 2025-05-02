import styled from "styled-components"

const HeadList = ({name, isButtonActivate, toggleActivateButton,index}) => {

  return (
    <>
      {isButtonActivate ? 
        <StyledWrapperWhenButtonActivate>
          <button className="btnWrapper" onClick={() => toggleActivateButton(index)}>
            <figure></figure>
            <a href="#" className="btn2"><span className="spn2">{name}</span></a>
          </button>
        </StyledWrapperWhenButtonActivate>
      :
        <StyledWrapper>
          <button className="btnWrapper" onClick={() => toggleActivateButton(index)}>
            <figure></figure>
            <a href="#" className="btn2"><span className="spn2">{name}</span></a>
          </button>
        </StyledWrapper>
      }
    </>
  );
}

const StyledWrapperWhenButtonActivate = styled.div`
  .btn2 {
    color: #E9E9E9
  }

  .btnWrapper {
    position: relative;
    display: block;
    padding: 9px 26px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    min-width: 331px;
    margin: 0 auto;
  }

  .btnWrapper::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 2px;
    width: 331px;
    background-color: #848484;
  }

  .btnWrapper::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0px;
    width: 2px;
    background-color: #848484;
    animation: toTop 1s ease-in-out;
    animation-fill-mode: forwards;
  }

  .btnWrapper figure::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 331px;
    opacity: 0;
    background-color: #848484;
    animation: topStrokeVisible 1s ease-in;
    animation-fill-mode: forwards;
  }
  .btnWrapper figure::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 0px;
    width: 2px;
    background-color: #848484;
    animation: toTop 1s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes toTop {
    0% {
      height: 0px;
    }
    100% {
      height: 34px;
    }
  }

  @keyframes topStrokeVisible {
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`

const StyledWrapper = styled.div`
  .btn2 {
    color: #E9E9E9
  }

  .btnWrapper {
    position: relative;
    display: block;
    padding: 9px 26px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    min-width: 331px;
    margin: 0 auto;
  }

  .btnWrapper::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 2px;
    width: 331px;
    background-color: #848484;
  }
  `;

export default HeadList;
