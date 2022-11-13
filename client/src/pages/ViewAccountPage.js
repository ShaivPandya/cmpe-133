import ViewAccount from "../components/User/ViewAccount/ViewAccount"

export default function ViewAccountPage() {
    return(
        <div>
            {/* 
            If the account is a user, display user's account page
            If the account is a company, display business account page 
            */}
            <ViewAccount />
        </div>
    )
}