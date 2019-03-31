//
//  ViewController.swift
//  softcall
//
//  Created by Kelly Fesler on 3/31/19.
//  Copyright © 2019 sad boi studios. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var dataView: UITextView?
    @IBAction func getCallPressed(){
        APIManager.sharedInstance.getPostWithId(postId: 1, onSuccess: { json in
            DispatchQueue.main.async {
                self.dataView?.text = String(describing: json)
            }
        }, onFailure: { error in
            let alert = UIAlertController(title: "Error", message: error.localizedDescription, preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "Dismiss", style: .default, handler: nil))
            self.show(alert, sender: nil)
        })
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }


}

