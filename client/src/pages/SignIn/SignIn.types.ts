export interface CredentialResponse {
    clientId?: string;

    /** returned ID token */
    credential?: string;

    /** sets how the credential is selected */
    select_by?:
        | "auto"
        | "user"
        | "user_1tap"
        | "user_2tap"
        | "btn"
        | "btn_confirm"
        | "brn_add_session"
        | "btn_confirm_add_session";
}
