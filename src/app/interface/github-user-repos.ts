//https://api.github.com/users/PhilipOdhiambo/repos
export interface IGithubUserRepo {
    owner:{login:string}
    name: string,
    html_url:string,
    description:string,
    licence:string,
    updated_at:string,
    pushed_at:string
}