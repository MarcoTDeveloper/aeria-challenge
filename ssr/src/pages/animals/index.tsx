import { useAeria } from 'aeria'

export async function getStaticProps() {
  const aeria = await useAeria()
  const users = await aeria.collections.user.functions.getAll()

  return {
    props: {
      users: users.map((user) => ({
        name: user.name
      }))
    }
  }
}

export default function Hello(props: Awaited<ReturnType<typeof getStaticProps>>['props']) {
  return <>
    <h1>Users</h1>
    <ul>
      {props.users.map((user) => (
        <li>{ user.name }</li>
      ))}
    </ul>
  </>
}
