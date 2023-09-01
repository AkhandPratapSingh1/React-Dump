// @flow strict

import * as React from 'react';
import { connect } from 'react-redux'

import PageBase from './../PageBase'
import { parseLeaveData } from './utils'
// type Props = {||};

class Dashboard extends React.Component {
    componentDidUpdate() {
        if (this.props.Data === null) {
            this.props.history.push('/')
        }
    }
    render() {
        if (this.props.Data === null) {
            this.props.history.push('/')
        }
        if(this.props.Data !== null){
        let leaveData = null
        let dashboardData = this.props.menuItem === 'My Leave' ? this.props.Data.leaves.my_leave : 
                                this.props.menuItem === 'New Leave' ? this.props.Data.leaves.new_leave :
                                    this.props.menuItem === 'Pending Leave Requests' ? this.props.Data.pending_leaves :
                                        this.props.menuItem === 'Approved Leaves' ? this.props.Data.pending_leaves : []

        let finalData = parseLeaveData(dashboardData)
        console.log('Dashboard \n', this.props)
        
        return (
            <PageBase previlige={this.props.previlige} dashboardProps={this.prps}>
                <h1>{this.props.previlige}</h1> <br />
               { this.props.menuItem === 'Dashboard' ?  <h1>{ this.props.Data !== null ? this.props.Data.email : 'ananymous'}</h1> :
            //    this.props.menuItem === 'Log out' ? <div></div>   :
              <table border={2}>
                    <thead>
                        <tr>
                            <td>{`start Date`}</td> <td>{`end Date`}</td> <td>{`Reason`}</td> <td>{  this.props.menuItem === 'New Leave' ? '':`Status`}</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.menuItem === 'New Leave' ?
                                (<tr>
                                    <td> <input type='date' /></td>
                                    <td> <input type='date' /></td>
                                    <td> <textarea rows="4" cols="50" maxlength="200" style={{resize:'none'}}/></td>
                                    <td><input type='button' value='submit'/></td>
                                </tr>)
                                :
                                (finalData.map((row, i) => {
                                    return <tr key={i}>
                                        {
                                            Object.keys(row).map((k, ind) => {
                                                return <td key={ind}>{row[k]}</td>
                                            })
                                        }
                                    </tr>
                                })
                                )
                        }
                    </tbody>
                </table>
               }
            </PageBase>
        );
    }else{return <h1>Loading...</h1>}
}
}
const mapState = (state) => {
    let { previlige, userName, password, isLoading } = state.AppReducer
    let { menuItem } = state.pageBaseReducer
    let Data = state.AppReducer[previlige === 'USER' ? 'userData' : 'adminData']
    console.log('state.AppReducer ', state.AppReducer[previlige === 'USER' ? 'userData' : 'adminData'])
    return { userName, password, isLoading, previlige, Data, menuItem }
}
const mapDispatch = (dispatch) => ({
    LoginAdmin: (props) => dispatch({ type: 'LOGIN', payload: { previlige: 'userLogin', userName: props.userName, password: props.password } }),
    LoginUser: (props) => dispatch({ type: 'LOGIN', payload: { previlige: 'adminLogin', userName: props.userName, password: props.password } }),
    onFieldChange: (value, key) => dispatch({ type: 'ON_FIELD_CHANGE', payload: { key, value } })
})
export default connect(mapState, mapDispatch)(Dashboard);