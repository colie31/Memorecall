from flask.cli import AppGroup
from .users import seed_users, undo_users
from .journals import seed_journals, undo_journals
from .entries import seed_entries, undo_entries
from .images import seed_images, undo_images


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users(),
    seed_journals(),
    seed_entries(),
    seed_images()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users(),
    undo_journals(),
    undo_entries(),
    undo_images()
    # Add other undo functions here
