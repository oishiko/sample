def change_file_permissions_noncompliant():
    import os
    import stat
    # Noncompliant: permissions assigned to all users.
    os.chmod("sample.txt", stat.S_IRWXU | stat.S_IRWXG | stat.S_IRWXO)