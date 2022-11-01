import { Component } from "react";
import ErorrMessage from "../errorMessage/errorMessage";
class ErrorBoundary extends Component {
    state = {
        error: false
    }
//работает только с ошибкой, обновляет только состояние
    static getDerivedStateFromError(error){
        return {error: true}
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
        this.setState({
            error:true
        })
    }

    render(){
        if (this.state.error) {
            return <ErorrMessage/>
        }

        return this.props.children;
    }



}

export default ErrorBoundary;





