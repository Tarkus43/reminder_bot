// db.js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import chalk from 'chalk'

export let db = null

try {
    db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS reminders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        message TEXT NOT NULL,
        remind_at INTEGER NOT NULL,
        is_fired INTEGER DEFAULT 0
        )
    `)
} catch (error) {
  console.log(chalk.red('error creating table or connecting to database:', error))
}