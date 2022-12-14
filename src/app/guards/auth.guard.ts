import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import supabase from "../supabase";

@Injectable()
export class AuthGuard implements CanActivateChild {

    async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        const { data } = await supabase.auth.getSession()


        if (data?.session) {

            // Get roles metadata from route in app-routing.module.ts file
            const routeRoles: Array<string> = route.data['roles']

            // Check if the activated route has roles
            if (routeRoles !== undefined) {
                
                // Select The user roles by joing roles table
                const response = await supabase.from("users_roles")
                    .select("roles(name)")
                    .eq("user_id", data.session.user.id)


                const selectedRoles = response.data.map(function (row) {
                    return row.roles["name"]
                })

                // Compare the retrived roles list to the route roles list
                return routeRoles.reduce((prev, current) => {
                    return prev || selectedRoles.includes(current)
                }, false)

            }

            return true
        }


        return false
    }
}