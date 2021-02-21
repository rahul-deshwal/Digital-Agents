import { connect } from 'react-redux'
import HomeComponent from '../components/home/homeComponent'
import * as actions from '../redux/actions/index'

const mapStateToProps = state => {
    return {
        titleList: state.titleList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setTitleList: (titleList) => dispatch(actions.setTitleList(titleList)),
        setDataFromLocal: (localList) => dispatch(actions.setDataFromLocal(localList)),
    };
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)

export default Home;


