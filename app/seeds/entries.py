from app.models import db, Journal, Entry, User, Category
import datetime

def seed_entries():
    user = User.query.first()
    journal = Journal.query.first()
    category = Category.query.first()

    demo = Entry(
        body = 'My first journal entry, How remarkable',
        date = datetime.datetime.now(),
        page_layout = 'layout_two',
        user_id = user.id,
        journal_id = journal.id,
        category_id = category.id
    )

    db.session.add(demo)
    db.session.commit()


    for num in range(1, 15):
        demo2 = Entry(
            body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Et odio pellentesque diam volutpat. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Pellentesque habitant morbi tristique senectus et. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Vitae nunc sed velit dignissim sodales ut eu sem integer. Donec ac odio tempor orci. Erat nam at lectus urna duis convallis convallis. Eu non diam phasellus vestibulum. Tempor nec feugiat nisl pretium fusce id velit ut. Nam at lectus urna duis convallis convallis tellus id interdum. Sed euismod nisi porta lorem mollis aliquam ut. Sed ullamcorper morbi tincidunt ornare. Interdum posuere lorem ipsum dolor sit amet. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Senectus et netus et malesuada fames. Neque sodales ut etiam sit amet nisl purus in. Eget felis eget nunc lobortis mattis aliquam faucibus purus.',
            date=f'2021-02-{num}',
            page_layout = 'layout_one',
            user_id = user.id,
            journal_id = journal.id,
            category_id = category.id
        )
        db.session.add(demo2)
        db.session.commit()


def undo_entries():
    db.session.execute('TRUNCATE entries CASCADE;')
    db.session.commit()