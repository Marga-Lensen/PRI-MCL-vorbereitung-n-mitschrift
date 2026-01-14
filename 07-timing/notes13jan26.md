## PRI-07 

### 1. Unix / Linux bash script



### cron

echo "" // wie console log  bzw print in console

- template literal

echo "Es ist $(date)" 

echo "Es ist $(date)"  > ./test.txt

echo "Es ist $(date)" >> ~/Schreibtisch/DCI_teaching-v5-2025/PRI/07-timing/zeit.txt

```console
dci-admin@Lenovo-V15-G4-IRU:~/Schreibtisch/DCI_teaching-v5-2025/PRI/07-timing$ crontab -e
no crontab for dci-admin - using an empty one

Select an editor.  To change later, run 'select-editor'.
  1. /bin/nano        <---- easiest
  2. /usr/bin/vim.tiny
  3. /bin/ed

Choose 1-3 [1]: 

#
#
#

# Output of the crontab jobs (including errors) is sent through
# email to the user the crontab file belongs to (unless redirected).
# 
# For example, you can run a backup of all your user accounts
# at 5 a.m every week with:
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
# 
# For more information see the manual pages of crontab(5) and cron(8)
# 
# m h  dom mon dow   command
* * * * * ~/Schreibtisch/DCI_teaching-v5-2025/PRI/07-timing/


~/Schreibtisch/DCI_teaching-v5-2025/PRI/07-timing/script.sh
```

### Warteschlangen

### Debouncing

### Einfache Zeitbestimmung in JavaScript

**Debouncing**

#### setTimeout()


> setTimeout() nimmt callback function und Zeitangabe

```javascript
async function doSearch(value) {
  // API Anfrage machen
  console.log("verzögerte Suche: ", value);

}

input.addEventListener("input", () => {
  console.log(input.value);

  // damit es nicht bei jeder Eingabe sucht, Verzögerung einbauen

  setTimeout(() => {
    doSearch(input.value);
  }, 500);
});

```

**aber immer noch gesucht nach jeder Buchstabe**

=> timer um das getippte zu löschen

```javascript
if(timer) clearTimeout(timer)
```


### setInterval

> spiel mit Maus und Käse