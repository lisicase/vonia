# replace this with where your google credentials file is
export GOOGLE_APPLICATION_CREDENTIALS="/mnt/c/Users/kchou/OneDrive/Documents/School/Informatics/Capstone/vonia/backend/spotty-a8e30-62726e237205.json"
if [ -z "${GOOGLE_APPLICATION_CREDENTIALS}" ];
then
    echo "remember to set GOOGLE_APPLICATION_CREDENTIALS"
else
    echo $GOOGLE_APPLICATION_CREDENTIALS
    nodemon backend/server.js
fi