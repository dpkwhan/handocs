# Cron Job

Check whether cron daemon is running:

```bash
pgrep cron
```

If you see no number, then cron is not running. ``sudo /etc/init.d/cron start`` can be used to start cron.

Rather than invoking init scripts through ``/etc/init.d``, use the service utility, e.g.

```bash
sudo service cron start
```

## Launch cron daemon

First check whether cron is running. Launch it if not.

```bash
re='^[0-9]+$'
cronpid=`pgrep cron`
if ! [[ $cronpid =~ $re ]] ; then
   service cron start > /dev/null 2>&1
fi
```