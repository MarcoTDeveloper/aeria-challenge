import { useAeria } from 'aeria'


export async function getStaticProps() {
  const aeria = await useAeria()
  const users = await aeria.collections.user.functions.getAll()

  return {
    props: {
      users: users.map((user) => ({
        name: user.name,
        picture: user.picture || null
      }))
    }
  }
}

export default function Hello(props: Awaited<ReturnType<typeof getStaticProps>>['props']) {
  return <div className="p-6">
    <h1 className="font-bold text-2xl">Users</h1>
    <ul>
      {props.users.map((user) => (
        <li key={user.name} className="border p-6">
          <div>{ user.name }</div>
          { user.picture && <img src={ user.picture }/> }
        </li>
      ))}
    </ul>
  </div>
}
