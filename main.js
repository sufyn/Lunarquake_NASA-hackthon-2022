            
            const scene = new THREE.Scene();
            const light = new THREE.PointLight()
            light.position.set(45, 7.5, 75)
             scene.add(light)
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer({antialias: true  });
			renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.setPixelRatio(window.devicePixelRatio);
			document.body.appendChild( renderer.domElement );



            
			const geometry = new THREE.SphereGeometry( 15, 50 ,50 );
			const material = new THREE.MeshPhongMaterial( { wireframe: false,map: new THREE.TextureLoader().load('./img/moon_color.jpg')
             ,bumpMap:new THREE.TextureLoader().load('./img/moon_dis.jpg') ,
             bumpScale: 0.5
            } );
			const sphere = new THREE.Mesh( geometry, material );
			scene.add( sphere );

      		const geometry1 = new THREE.SphereGeometry( 500, 50 ,50 );
			const material1 = new THREE.MeshBasicMaterial( { 
                map: new THREE.TextureLoader().load('./img/stars.jpg'),
                side: THREE.BackSide
              } );
			const sphere1 = new THREE.Mesh( geometry1, material1 );
			scene.add( sphere1 );
            
            const group = new THREE.Group();
            group.add(sphere)
            scene.add(group)
            
            const starGeometry = new THREE.BufferGeometry();
            const starMaterial = new THREE.PointsMaterial({
                color: 0xffffff
            }); 

            const starVertices = [];
            for (let i=0; i<100000; i++){
                const x = (Math.random() - 0.5) * 2000;
                const y = (Math.random() - 0.5) * 2000;
                const z = -Math.random() * 3000;
                starVertices.push(x, y, z);
            }
            
            starGeometry.setAttribute('position', 
            new THREE.Float32BufferAttribute(starVertices, 3)
            );

            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars)


			camera.position.z = 45;
			
            
           
            //controls
   controls = new THREE.OrbitControls( camera, renderer.domElement);
   controls.enableDamping = true;




			function animate() {
				requestAnimationFrame( animate );

				
				stars.rotation.y += 0.0001;
				sphere.rotation.y += 0.01;
                
               

                addEventListener('dblclick', () => {
                    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
                    if (!fullscreenElement) {
                        if (renderer.domElement.requestFullscreen) {
                            renderer.domElement.requestFullscreen();
                        } else if (renderer.domElement.webkitRequestFullscreen) {
                            renderer.domElement.webkitRequestFullscreen();
                        }
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        }
                    }
                })
                



                addEventListener('keydown', (event) => {
                    if (event.code === 'KeyW') {
                        camera.position.y += 0.001;
                    }
                    if (event.code === 'KeyS') {
                        camera.position.y -= 0.001;
                    }
                    if (event.code === 'KeyD') {
                        camera.position.x += 0.001;
                    }
                    if (event.code === 'KeyA') {
                        camera.position.x -= 0.001;
                    }
                })

                controls.update();

				renderer.render( scene, camera );
			};


            
			animate();

    
    
    
    

