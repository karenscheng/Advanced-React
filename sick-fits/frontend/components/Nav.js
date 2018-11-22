import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/sell">
            <p>Sell!</p>
        </Link>
        <Link href="/">
            <p>Home!</p>
        </Link>
    </div>
)

export default Nav;