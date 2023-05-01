import { createRestriction } from '@/be/lib/auth'

// will check if user is logged in and method is POST
const restricted = createRestriction({
    method: 'POST',
})

export default restricted(async (req, res) => {
    res.status(200).json({ message: 'It works' })
})
