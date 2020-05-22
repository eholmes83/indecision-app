import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter