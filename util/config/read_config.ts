import colors from '../colors.ts'
import { readFileSync } from 'fs'

function read_config() {
    const config = readFileSync('./config/requirements.example.conf', 'utf8')
    if (config.includes('\n')) {
        colors.blue('found newline')
        const formatted_config = config.split('\n', 2)

        console.log(formatted_config)
    }
}

export default read_config