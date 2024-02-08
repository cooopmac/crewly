"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { TbPlus } from "react-icons/tb";

export default function AddMemberModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={<TbPlus />}>
        Add Member
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Member Information
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent=""
                  label="Member Name"
                  placeholder="Enter name"
                  variant="bordered"
                  isRequired
                />
                <Input
                  endContent=""
                  label="Member Role"
                  placeholder="Enter role"
                  variant="bordered"
                  isRequired
                />
                <Input
                  endContent=""
                  label="Member Email"
                  placeholder="Enter email"
                  variant="bordered"
                  isRequired
                />
                <Input
                  endContent=""
                  label="Member Phone"
                  placeholder="Enter phone number"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between"></div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save Member
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
