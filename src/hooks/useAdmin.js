import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://laptop-parts-source-server-side.up.railway.app/admin/${email}`, {

                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                })
        }
    }, [user])

    return [admin, adminLoading];

}

export default useAdmin;