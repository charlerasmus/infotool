sencha app build testing
#ftp -n <<EOF
#  open capetosofia.com
#  user capetoso Th1s1sTh3D4y

#  cd /www/servers/mobile
#  lcd /home/charl/Dropbox/mobile/build/production/mobile
#  put app.js
#  put index.html

#  cd /public_html/servers/mobile/app/controller
#  lcd /home/charl/work/app/mobile/build/production/mobile/app/controller/
  
#  put List.js

#  cd /public_html/servers/mobile/app/form
#  lcd /home/charl/work/app/mobile/build/production/mobile/app/form
#  mput *

#  quit
#  bye

#EOF


#cd /public_html/servers/mobile/app/model
#lcd /home/charl/work/app/mobile/build/production/mobile/app/model
#mput *
#cd /public_html/servers/mobile/app/store
#lcd /home/charl/work/app/mobile/build/production/mobile/app/store
#mput *
#quit
#cd /public_html/servers/mobile/app/view
#lcd /home/charl/work/app/mobile/build/production/mobile/app/view
#mput *
#cd /public_html/servers/mobile/deltas/app.js
#lcd /home/charl/work/app/mobile/build/production/mobile/deltas/app.js/
#mput *
